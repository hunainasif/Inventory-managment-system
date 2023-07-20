import Header from '@/components/header/Header'
import AddProduct from '@/components/addproduct/AddProduct'
import ProductTable from '@/components/producttable/ProductTable'
import Search from '@/components/search/Search'

export default function Home() {
  return (
   <>
   <Header/>
   <Search/>
   <AddProduct/>
   <ProductTable/>
   </>
  )
}
