import Hero from "../Components/Hero/Hero";
import NewCollections from "../Components/NewCollections/NewCollection";
import NewsLetter from "../Components/NewLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";

export default function Shop(){
    
    return(
<div>
 < Hero />
  <Popular />
  <br  />
  <br  />
  <br  />
  <br  />
  <Offers />
  <NewCollections />
  <NewsLetter />
</div>
    )
}