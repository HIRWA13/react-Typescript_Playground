type personProps = {
    name: {
        first: string,
        last: string
    }
}

export default function Person(props: personProps) {
  return (
    <>
        <h1 className="text-center font-bold mt-2">{props.name.first} {props.name.last}</h1>
    </>
  )
}