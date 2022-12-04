
import {
    New,
    Card,
    List,
    Title,
    Content
} from "./styles"

export default function news ({results}) {


    return(
        <New>
            <h1>Principais Assuntos</h1>
            <List>
                {results.map((result) => (
                    <Card key={result.id}><Content href={result.url}><Title>{result.title}</Title></Content></Card>
                ))}
            </List>

        </New>
    )
}