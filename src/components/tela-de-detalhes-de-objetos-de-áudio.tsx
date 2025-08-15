import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export function TelaDeDetalhesDeObjetosDeÁudio() {
  return (
    <Card className="min-h-screen bg-background">
      <CardHeader className="border-b border-border">
        <div className="flex items-center gap-4">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
            <Icon icon="lucide:arrow-left" className="h-4 w-4" />
          </Button>
          <div>
            <CardTitle className="font-heading text-xl">Trilha Sonora Principal</CardTitle>
            <p className="text-sm text-muted-foreground">Detalhes do objeto de áudio</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 py-6 space-y-8">
        <div className="grid gap-6">
          <div className="space-y-4">
            <h3 className="font-heading text-lg">Informações do Objeto de Áudio</h3>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Objeto</Label>
                <Input id="name" defaultValue="Trilha Sonora Principal" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Tipo de Áudio</Label>
                <Select defaultValue="background">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="background">Música de Fundo</SelectItem>
                    <SelectItem value="effect">Efeito Sonoro</SelectItem>
                    <SelectItem value="voice">Narração</SelectItem>
                    <SelectItem value="ambient">Som Ambiente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="duration">Duração</Label>
                <Input id="duration" placeholder="mm:ss" defaultValue="3:45" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  rows={3}
                  defaultValue="Trilha sonora principal do projeto, com melodia envolvente e atmosfera épica."
                />
              </div>
            </div>
          </div>
          <Separator />
          <div className="space-y-4">
            <h3 className="font-heading text-lg">Arquivo de Áudio</h3>
            <div className="border border-dashed border-border rounded-lg p-6 text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <Icon icon="lucide:music" className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Arquivo atual: trilha_principal.mp3</p>
                <p className="text-xs text-muted-foreground">Tamanho: 8.2 MB • Formato: MP3</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Icon icon="lucide:volume-2" className="h-4 w-4 text-muted-foreground" />
              <div className="flex-1 bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-1/3" />
              </div>
              <span className="text-xs text-muted-foreground">1:15 / 3:45</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                <Icon icon="lucide:play" className="h-4 w-4 mr-2" />
                Reproduzir
              </Button>
              <Button size="sm" variant="outline">
                <Icon icon="lucide:download" className="h-4 w-4 mr-2" />
                Baixar
              </Button>
            </div>
            <div className="border border-dashed border-border rounded-lg p-6 text-center space-y-4">
              <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                <Icon icon="lucide:upload" className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium">Substituir arquivo de áudio</p>
                <p className="text-xs text-muted-foreground">
                  Arraste e solte ou clique para selecionar
                </p>
              </div>
              <Button size="sm" variant="outline">
                <Icon icon="lucide:folder-open" className="h-4 w-4 mr-2" />
                Selecionar Arquivo
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t border-border px-6 py-4 flex justify-between">
        <Button variant="destructive" className="gap-2">
          <Icon icon="lucide:trash-2" className="h-4 w-4" />
          Excluir Objeto
        </Button>
        <div className="flex gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button className="gap-2">
            <Icon icon="lucide:save" className="h-4 w-4" />
            Salvar Alterações
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
