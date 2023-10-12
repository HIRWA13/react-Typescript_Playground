type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export default function PersonList(props: PersonListProps) {
  return (
    <>
        <section className="w-2/4 mx-auto mt-10 shadow-lg p-4">
            <h1 className="p-2 font-bold">Person List</h1>
            {
                props.names.map(name => {
                    return (
                        <div key={name.first }>
                            <h2>{name.first} {name.last}</h2>
                        </div>
                    )
                })
            }
        </section>
    </>
  )
}