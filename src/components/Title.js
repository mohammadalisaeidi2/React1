import './Title.css'
export default function Title({onvan, zironvan}) {
    return(
        <div className='title-block'>
            <h1 className="title">{onvan}</h1>
            <br />
            <h2 className="subtitle">{zironvan}</h2>
        </div>
    )
}