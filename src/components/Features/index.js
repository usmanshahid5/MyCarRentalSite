import React         from "react";
import FeatureData   from '../FeaturesCatalog/FeatureData';
import { useParams } from "react-router-dom";
import Feature       from './Feature';

const MyFeature = () => {
  const params = useParams()
  const { type } = params;
  console.log(params, "params")
  return (
    <>
      {

        FeatureData.filter(val => val.type == `${ type }`).map((val) => {
          return <Feature
            image1={val.image1}
            image2={val.image2}
            image3={val.image3}
            image4={val.image4}
            image5={val.image5}
            image6={val.image6}
            heading={val.Heading}
            description={val.description}
            bold={val.bold}
          />
        })
      }
    </>
  )
}
export default MyFeature