
import './App.css'
import { productSampleData } from './data'

function App() {

  return (
    <>
      <header>
        <h1>Header</h1>
      </header>
      <main>
        <ul>

        {productSampleData.map((product)=>(
          <li key={product.slug}>
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <a href="/">
              <img src={product.image} alt={product.name} width={200} />
            </a>
            <p>{product.description}</p>
          </li>
        ))}
        </ul>
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  )
}

export default App
