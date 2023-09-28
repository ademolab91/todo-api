import { BaseModel } from "../baseModel";
import { Task } from "../taskModel";

const classes: Object = { basemodel: BaseModel, task: Task };

interface FileStorageInterface {
    file_path: string
    objects: Object
    all(cls: string): Object
    _new(): void
    save(): void
    reload(): void
    delete(): void
    close(): void
}

class FileStorage implements FileStorageInterface {
    private file_path: string
    private objects: Object

    constructor() {
        this.file_path = "./file_storage.json"
        this.objects = {}
    }

    all(cls: string | null = null) {
        if (cls !== null) {
            const new_objs: Object = {}
            for (const key in this.objects) {
                if cls == this.objects[key]
            }
        }
        return {}
    }
}
