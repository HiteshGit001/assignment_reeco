import { GridBox } from "../../styledComponents/GridBox"
import { labels } from "../../utils/labels"

const SupplierDetails = () => {
  const Grid = GridBox(6);
  return (
    <Grid>
      <div>
        <p>{labels.supplier}</p>
        <p>{labels.supplierName}</p>
      </div>
      <div>
        <p>{labels.supplier}</p>
        <p>{new Date().getDate()}</p>
      </div>
      <div>
        <p>{labels.total}</p>
        <p>$ total</p>
      </div>
      <div>
        <p>{labels.category}</p>
        <div>

        </div>
      </div>
      <div>
        <p>{labels.department}</p>
        <p>number</p>
      </div>
      <div>
        <p>{labels.status}</p>
        <p>Awaiting your approvel</p>
      </div>
    </Grid>
  )
}

export default SupplierDetails