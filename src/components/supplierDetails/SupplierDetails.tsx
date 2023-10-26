import useAppSelector from "../../hooks/useAppSelector"
import { GridBox } from "../../styledComponents/GridBox"
import { labels } from "../../utils/labels"
import { IoFastFoodSharp } from "react-icons/io5"
import { MdFastfood, MdFoodBank, MdEmojiFoodBeverage } from "react-icons/md"


const SupplierDetails = () => {
  const { supplierData } = useAppSelector((state) => state.supplier);

  const total = supplierData.reduce((acc, curr) => Number(acc) + Number(curr.total), 0);

  const Grid = GridBox(6);
  const GridIcons = GridBox(4);
  return (
    <Grid style={{ alignItems: "flex-start" }}>
      <div>
        <p>{labels.supplier}</p>
        <p className="f_m">{labels.supplierName}</p>
      </div>
      <div>
        <p>{labels.supplier}</p>
        <p className="f_m">{new Date().getDate()}</p>
      </div>
      <div>
        <p>{labels.total}</p>
        <p className="f_m">$ {total}</p>
      </div>
      <div>
        <p>{labels.category}</p>
        <GridIcons>
          <IoFastFoodSharp />
          <MdFastfood />
          <MdFoodBank />
          <MdEmojiFoodBeverage />
        </GridIcons>
        <GridIcons>
          <MdFastfood />
          <IoFastFoodSharp />
          <MdEmojiFoodBeverage />
          <MdFoodBank />
        </GridIcons>
      </div>
      <div>
        <p>{labels.department}</p>
        <p className="f_m">number</p>
      </div>
      <div>
        <p>{labels.status}</p>
        <p className="f_m">Awaiting your approvel</p>
      </div>
    </Grid>
  )
}

export default SupplierDetails