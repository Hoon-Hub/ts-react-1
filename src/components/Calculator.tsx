import { useState } from "react"
import { Container,Button } from "react-bootstrap"

const Calculator = () => {
  const [num, setNum] = useState<number>(0)

  return (
    <Container className="mt-5">
      <h1>Calculator</h1>
      <div className="d-flex gap-3">
        <Button className="danger" onClick={()=>setNum(num-1)}> - </Button>
        <p className="">{num}</p>
        <Button className="primary" onClick={()=>setNum(num+1)}> + </Button>
      </div>
    </Container>
  )
}

export default Calculator