
import { create, BaseDirectory, readFile, exists } from '@tauri-apps/plugin-fs';
import * as path from '@tauri-apps/api/path';



type ContainerProps = {
    children: React.ReactNode;
};
const FileRead: React.FC<ContainerProps> = ({ children }) => {
    (async () => {
        const tokenExists = await exists('config.json', {
            baseDir: BaseDirectory.Resource,
        });

        if (!tokenExists) {
            const file = await create('config.json', { baseDir: BaseDirectory.Resource });
            await file.write(new TextEncoder().encode('{}'));
            await file.close();
        } else {
            const file = await readFile('config.json', { baseDir: BaseDirectory.Resource });
            const data = new TextDecoder().decode(file);

            // setFile(JSON.parse(data));
        }
    })();
    console.log('FileRead component mounted');

    return (
        <>
            {children}
        </>
    )
}
export default FileRead;