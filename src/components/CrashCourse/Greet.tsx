type GreetProps = {
  name: string,
  unreadMessages?: number,
  isLoggedIn: boolean
}

export default function Greet(props: GreetProps) {
  return (
    <>
        <h1 className="text-center text-3xl font-bold p-2">
          {props.isLoggedIn ? `Welcome back, ${props.name} you have ${props.unreadMessages} messages` : "Welcome, Guest"}
        </h1>
    
    </>
  )
}