export default function List() {

    let name = 'park'
    let age = 20
    let link = "http://www.google.co.kr"

    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let 변수 = 20

    console.log('test-------------')
    console.log('test-------------' + {상품})
    console.log({상품})

    return (
      <div>
        <h4 className="title">List</h4>
       
        <div className="food">
          <h4>{상품[0]} $40</h4>
        </div>
        <div className="food">
          <h4>{상품[1]} $40</h4>
        </div>
        <div className="food">
          <h4>{상품[2]} $40</h4>
        </div>

      </div>
    )
  }
  