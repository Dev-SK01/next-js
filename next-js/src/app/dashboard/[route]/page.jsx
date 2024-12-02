

const DynamicRoute = ({params}) => {
  return (
    <div>
        DynamicRoute : <span>{params?.route}</span>
    </div>
  )
}

export default DynamicRoute