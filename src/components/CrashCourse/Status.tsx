type StatusProps = {
    status: "loading" | "success" | "error"
}

export default function Status(props: StatusProps) {
    if(props.status === "loading") {
        return <h1>the page is {props.status}</h1>
    } else if(props.status === "success") {
        return <h1>the page status was a {props.status}</h1>
    } else if(props.status === "error") {
        return <h1>there was an {props.status} loading the page</h1>
    }
}