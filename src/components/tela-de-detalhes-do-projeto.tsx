import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TelaDeDetalhesDoProjeto() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold">Website Redesign</h1>
              <p className="text-muted-foreground mt-1">12 tarefas • 3 em andamento</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon icon="lucide:edit-3" className="w-4 h-4" />
              Editar Projeto
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold">Tarefas do Projeto</h2>
          <Button className="gap-2">
            <Icon icon="lucide:plus" className="w-4 h-4" />
            Nova Tarefa
          </Button>
        </div>
        <div className="space-y-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">Análise de Requisitos</h3>
                    <Badge variant="secondary">Concluída</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:headphones" className="w-4 h-4" />
                      <span>8 áudios</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clock" className="w-4 h-4" />
                      <span>Atualizado há 2 dias</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit-3" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">Design de Interface</h3>
                    <Badge>Em Andamento</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:headphones" className="w-4 h-4" />
                      <span>15 áudios</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clock" className="w-4 h-4" />
                      <span>Atualizado há 1 hora</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit-3" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">Desenvolvimento Frontend</h3>
                    <Badge>Em Andamento</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:headphones" className="w-4 h-4" />
                      <span>23 áudios</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clock" className="w-4 h-4" />
                      <span>Atualizado há 3 horas</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit-3" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">Integração de APIs</h3>
                    <Badge variant="outline">Pendente</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:headphones" className="w-4 h-4" />
                      <span>0 áudios</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clock" className="w-4 h-4" />
                      <span>Criado há 1 semana</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit-3" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">Testes e Validação</h3>
                    <Badge variant="outline">Pendente</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:headphones" className="w-4 h-4" />
                      <span>0 áudios</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clock" className="w-4 h-4" />
                      <span>Criado há 1 semana</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit-3" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="px-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">Deploy e Lançamento</h3>
                    <Badge variant="outline">Pendente</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:headphones" className="w-4 h-4" />
                      <span>0 áudios</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon icon="lucide:clock" className="w-4 h-4" />
                      <span>Criado há 1 semana</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit-3" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
