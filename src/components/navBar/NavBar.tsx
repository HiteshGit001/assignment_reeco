import { GridBox } from "../../styledComponents/GridBox";
import { Header } from "../../styledComponents/NavBar";
import { AiOutlineShoppingCart } from "react-icons/ai"

const NavBar = () => {
  const Grid = GridBox(2);
  const GridNav = GridBox(4)
  return (
    <Header>
      <div className="flex align_center" style={{ padding: "1rem", justifyContent: "space-between" }}>
        <GridNav style={{ gap: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>Reeco</p>
          <p>Store</p>
          <p>Orders</p>
          <p>Analytics</p>
        </GridNav>
        <Grid>
          <AiOutlineShoppingCart className="pointer" style={{ fontSize: "2rem" }} />
          <p>Hello Hitesh</p>
        </Grid>
      </div>
    </Header>
  )
}

export default NavBar