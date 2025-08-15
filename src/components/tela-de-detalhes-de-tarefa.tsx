import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function TelaDeDetalhesDeTarefa() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-heading font-bold">Gravação de Podcast - Episódio 23</h1>
              <p className="text-muted-foreground mt-1">Criada em 15 de Janeiro, 2024</p>
            </div>
            <Button size="sm" variant="outline">
              <Icon icon="lucide:edit" className="w-4 h-4 mr-2" />
              Editar Tarefa
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold">Objetos de Áudio</h2>
          <Button>
            <Icon icon="lucide:plus" className="w-4 h-4 mr-2" />
            Novo Objeto de Áudio
          </Button>
        </div>
        <div className="space-y-4">
          <Card>
            <CardContent className="px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon icon="lucide:music" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Introdução do Podcast</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span>MP3</span>
                      <Separator className="h-4" orientation="vertical" />
                      <span>2:34</span>
                      <Separator className="h-4" orientation="vertical" />
                      <Badge
                        variant="secondary"
                        className="bg-green-500/10 text-green-500 border-green-500/20"
                      >
                        <Icon icon="lucide:check-circle" className="w-3 h-3 mr-1" />
                        Gerado
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Icon icon="lucide:play" className="w-4 h-4 mr-2" />
                    Reproduzir
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon icon="lucide:music" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Segmento Principal</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span>WAV</span>
                      <Separator className="h-4" orientation="vertical" />
                      <span>15:42</span>
                      <Separator className="h-4" orientation="vertical" />
                      <Badge
                        variant="secondary"
                        className="bg-blue-500/10 text-blue-500 border-blue-500/20"
                      >
                        <Icon icon="lucide:loader-2" className="w-3 h-3 mr-1 animate-spin" />
                        Em Processamento
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" disabled>
                    <Icon icon="lucide:play" className="w-4 h-4 mr-2" />
                    Reproduzir
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon icon="lucide:music" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Encerramento</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span>MP3</span>
                      <Separator className="h-4" orientation="vertical" />
                      <span>1:28</span>
                      <Separator className="h-4" orientation="vertical" />
                      <Badge
                        variant="secondary"
                        className="bg-orange-500/10 text-orange-500 border-orange-500/20"
                      >
                        <Icon icon="lucide:clock" className="w-3 h-3 mr-1" />
                        Pendente
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" disabled>
                    <Icon icon="lucide:play" className="w-4 h-4 mr-2" />
                    Reproduzir
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon icon="lucide:music" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Música de Fundo</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span>MP3</span>
                      <Separator className="h-4" orientation="vertical" />
                      <span>3:15</span>
                      <Separator className="h-4" orientation="vertical" />
                      <Badge
                        variant="secondary"
                        className="bg-green-500/10 text-green-500 border-green-500/20"
                      >
                        <Icon icon="lucide:check-circle" className="w-3 h-3 mr-1" />
                        Gerado
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Icon icon="lucide:play" className="w-4 h-4 mr-2" />
                    Reproduzir
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="px-6">
              <div className="flex items-center justify-between py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon icon="lucide:music" className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Efeitos Sonoros</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                      <span>WAV</span>
                      <Separator className="h-4" orientation="vertical" />
                      <span>0:45</span>
                      <Separator className="h-4" orientation="vertical" />
                      <Badge
                        variant="secondary"
                        className="bg-red-500/10 text-red-500 border-red-500/20"
                      >
                        <Icon icon="lucide:x-circle" className="w-3 h-3 mr-1" />
                        Erro
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" disabled>
                    <Icon icon="lucide:play" className="w-4 h-4 mr-2" />
                    Reproduzir
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:edit" className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Icon icon="lucide:trash-2" className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 flex justify-center">
          <Card className="w-full max-w-md border-dashed">
            <CardContent className="px-6">
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                  <Icon icon="lucide:plus" className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Adicionar Novo Objeto</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Crie um novo objeto de áudio para esta tarefa
                </p>
                <Button>
                  <Icon icon="lucide:upload" className="w-4 h-4 mr-2" />
                  Adicionar Áudio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
