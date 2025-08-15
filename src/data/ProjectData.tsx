import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Tipo do objeto que será armazenado no array
interface Item {
    id: string
    name: string
    tag: string
    description: string
    createdAt: Date
    updatedAt: Date
}

// Tipo para criar um novo item (sem id, createdAt, updatedAt)
type CreateItemInput = Omit<Item, 'id' | 'createdAt' | 'updatedAt'>

// Tipo para editar um item (campos opcionais exceto id)
type UpdateItemInput = Partial<Omit<Item, 'id' | 'createdAt' | 'updatedAt'>> & {
    id: string
}

// Interface do estado da store
interface ItemsState {
    items: Item[]
    loading: boolean
    error: string | null
}

// Interface das ações da store
interface ItemsActions {
    // Operações CRUD
    addItem: (input: CreateItemInput) => void
    updateItem: (input: UpdateItemInput) => void
    deleteItem: (id: string) => void
    deleteItems: (ids: string[]) => void

    // Operações de busca
    getItem: (id: string) => Item | undefined
    getItems: () => Item[]
    findItems: (predicate: (item: Item) => boolean) => Item[]

    // Operações de estado
    setLoading: (loading: boolean) => void
    setError: (error: string | null) => void
    clearError: () => void

    // Operações em lote
    setItems: (items: Item[]) => void
    clearItems: () => void
}

// Combinação do estado e ações
type ItemsStore = ItemsState & ItemsActions

// Função para gerar ID único
const generateId = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
}



// Criação da store do Zustand
export const useItemsStore = create<ItemsStore>()(
    devtools(
        persist(
            (set, get) => ({
                // Estado inicial
                items: [],
                loading: false,
                error: null,

                // Adicionar novo item
                addItem: (input: CreateItemInput) => {
                    const now = new Date()
                    const newItem: Item = {
                        ...input,
                        id: generateId(),
                        createdAt: now,
                        updatedAt: now
                    }

                    set(
                        (state) => ({
                            items: [...state.items, newItem],
                            error: null
                        }),
                        false,
                        'addItem'
                    )
                },

                // Atualizar item existente
                updateItem: (input: UpdateItemInput) => {
                    set(
                        (state) => ({
                            items: state.items.map(item =>
                                item.id === input.id
                                    ? { ...item, ...input, updatedAt: new Date() }
                                    : item
                            ),
                            error: null
                        }),
                        false,
                        'updateItem'
                    )
                },

                // Excluir um item
                deleteItem: (id: string) => {
                    set(
                        (state) => ({
                            items: state.items.filter(item => item.id !== id),
                            error: null
                        }),
                        false,
                        'deleteItem'
                    )
                },

                // Excluir múltiplos itens
                deleteItems: (ids: string[]) => {
                    set(
                        (state) => ({
                            items: state.items.filter(item => !ids.includes(item.id)),
                            error: null
                        }),
                        false,
                        'deleteItems'
                    )
                },

                // Buscar item por ID
                getItem: (id: string) => {
                    return get().items.find(item => item.id === id)
                },

                // Obter todos os itens
                getItems: () => {
                    return get().items
                },

                // Buscar itens com predicado
                findItems: (predicate: (item: Item) => boolean) => {
                    return get().items.filter(predicate)
                },

                // Definir estado de loading
                setLoading: (loading: boolean) => {
                    set({ loading }, false, 'setLoading')
                },

                // Definir erro
                setError: (error: string | null) => {
                    set({ error }, false, 'setError')
                },

                // Limpar erro
                clearError: () => {
                    set({ error: null }, false, 'clearError')
                },

                // Definir todos os itens
                setItems: (items: Item[]) => {
                    set({ items, error: null }, false, 'setItems')
                },

                // Limpar todos os itens
                clearItems: () => {
                    set({ items: [], error: null }, false, 'clearItems')
                }
            }),
            {
                name: 'items-storage', // nome da chave no localStorage
                // Você pode configurar quais campos persistir
                partialize: (state) => ({ items: state.items }),
            }
        ),
        {
            name: 'items-store' // nome para o devtools
        }
    )
)

// Hooks personalizados para facilitar o uso
export const useItems = () => useItemsStore(state => state.items)
export const useItemsActions = () => useItemsStore(state => ({
    addItem: state.addItem,
    updateItem: state.updateItem,
    deleteItem: state.deleteItem,
    deleteItems: state.deleteItems
}))
export const useItemsState = () => useItemsStore(state => ({
    loading: state.loading,
    error: state.error
}))

// Exemplo de uso em um componente
/*
import { useItems, useItemsActions, useItemsState } from './store/itemsStore'

const ItemsComponent = () => {
  const items = useItems()
  const { addItem, updateItem, deleteItem } = useItemsActions()
  const { loading, error } = useItemsState()

  const handleAddItem = () => {
    addItem({
      name: 'Novo item',
      description: 'Descrição do novo item'
    })
  }

  const handleUpdateItem = (id: string) => {
    updateItem({
      id,
      name: 'Item atualizado'
    })
  }

  const handleDeleteItem = (id: string) => {
    deleteItem(id)
  }

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}
      
      <button onClick={handleAddItem}>Adicionar Item</button>
      
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={() => handleUpdateItem(item.id)}>Editar</button>
          <button onClick={() => handleDeleteItem(item.id)}>Excluir</button>
        </div>
      ))}
    </div>
  )
}
*/