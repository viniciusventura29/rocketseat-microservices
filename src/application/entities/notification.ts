export interface NotificationProps{
    content : string
    category: string
}

export class Notification{
    private props: NotificationProps

    constructor(props: NotificationProps){
        this.props = props
    }

    public set content(content: string){
        this.props.content =  content
    }

    public set category(category: string){
        this.props.category =  category
    }

    public get content():string{
        return this.props.content;
    }
}

const notify = new Notification({
    content: "Oi dante",
    category: "Tcahu dante"
});
