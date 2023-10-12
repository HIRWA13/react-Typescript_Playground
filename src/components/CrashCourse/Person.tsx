type PersonProps ={
  name: {
    first: string,
    last: string
  }
}

export default function Person(props:PersonProps) {
  return (
    <>
        <h1 className="text-center font-bold mt-2">Your name is {props.name.first} {props.name.last} ?????</h1>
    </>
  )
}