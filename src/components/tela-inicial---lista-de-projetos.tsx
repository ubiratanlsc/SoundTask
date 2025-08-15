import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function TelaInicialListaDeProjetos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon icon="lucide:folder-open" className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-heading font-bold">ProjectHub</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Button size="sm" variant="ghost">
              <Icon icon="lucide:settings" className="w-4 h-4 mr-2" />
              Configurações
            </Button>
            <Button size="sm" variant="ghost">
              <Icon icon="lucide:user" className="w-4 h-4 mr-2" />
              Perfil
            </Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Meus Projetos</h2>
            <p className="text-muted-foreground">Gerencie todos os seus projetos em um só lugar</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon icon="lucide:plus" className="w-4 h-4 mr-2" />
            Novo Projeto
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  Em Andamento
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon icon="lucide:more-horizontal" className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Icon icon="lucide:code" className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Website Redesign</h3>
                  <p className="text-sm text-muted-foreground">
                    Redesign completo do site corporativo
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Criado em:</span>
                  <span>15 Nov 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tarefas:</span>
                  <span className="font-medium">12/20</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-3/5" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                <Icon icon="lucide:eye" className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </CardFooter>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge
                  variant="default"
                  className="text-xs bg-green-500/20 text-green-400 border-green-500/30"
                >
                  Concluído
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon icon="lucide:more-horizontal" className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Icon icon="lucide:smartphone" className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">App Mobile</h3>
                  <p className="text-sm text-muted-foreground">
                    Aplicativo mobile para iOS e Android
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Criado em:</span>
                  <span>02 Oct 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tarefas:</span>
                  <span className="font-medium">25/25</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-full" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                <Icon icon="lucide:eye" className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </CardFooter>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs border-orange-500/30 text-orange-400">
                  Pausado
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon icon="lucide:more-horizontal" className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Icon icon="lucide:database" className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sistema ERP</h3>
                  <p className="text-sm text-muted-foreground">Sistema de gestão empresarial</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Criado em:</span>
                  <span>28 Sep 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tarefas:</span>
                  <span className="font-medium">8/35</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-1/4" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                <Icon icon="lucide:eye" className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </CardFooter>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  Em Andamento
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon icon="lucide:more-horizontal" className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Icon icon="lucide:shopping-cart" className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">E-commerce Platform</h3>
                  <p className="text-sm text-muted-foreground">Plataforma de vendas online</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Criado em:</span>
                  <span>10 Nov 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tarefas:</span>
                  <span className="font-medium">18/30</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full w-3/5" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                <Icon icon="lucide:eye" className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </CardFooter>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-border/50 hover:border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  Em Andamento
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon icon="lucide:more-horizontal" className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="px-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Icon icon="lucide:users" className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">CRM System</h3>
                  <p className="text-sm text-muted-foreground">Sistema de gestão de clientes</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Criado em:</span>
                  <span>05 Nov 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Tarefas:</span>
                  <span className="font-medium">5/15</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-1/3" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="outline" className="w-full">
                <Icon icon="lucide:eye" className="w-4 h-4 mr-2" />
                Ver Detalhes
              </Button>
            </CardFooter>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-200 cursor-pointer border-dashed border-2 border-border/50 hover:border-primary/50 flex items-center justify-center min-h-[280px]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon icon="lucide:plus" className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Criar Novo Projeto</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comece um novo projeto e organize suas tarefas
                </p>
                <Button>
                  <Icon icon="lucide:plus" className="w-4 h-4 mr-2" />
                  Novo Projeto
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
