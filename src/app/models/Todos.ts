export class Todo {
    content!: string;
    completed?:boolean = false;
    bg?:string = 'https://media.istockphoto.com/photos/athletic-woman-climbing-on-overhanging-cliff-rock-with-sunset-sky-picture-id1179235120?k=20&m=1179235120&s=612x612&w=0&h=5mtqpEKABmEkHcgXK9x25qDEkSNk1nIKXgXcwWmd9eM=';
    _id?:string = undefined;

    constructor(content: string) {
        this.content = content;
    }
}