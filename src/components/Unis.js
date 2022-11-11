import './Unis.css'
export default function Uni({unis , handleClick}) {
    return (
        <div>
            {unis.map((uni, index) => (
              <div className='card' key={uni.id}>
                <h2> shomare {index+1} - {uni.title}</h2>
                <p>{uni.location} - {uni.date}</p>
                <button onClick={() => handleClick(uni.id)}> delete {uni.name}</button>
              </div>
      ))}
        </div>
    )
}