import PropTypes from 'prop-types';
import '../../style/SaintCard.css';
import { FaShield } from "react-icons/fa6";
import { GiElfHelmet } from "react-icons/gi";
import { Link } from 'react-router-dom';

export const SaintCard = ( {
        id,
        saint, 
        caballero,
        image,
        rango, 
}) => {
    return (
        <>
        <div >
                <main className="card">
                    <div className='card__link' >
                        <div  className='card_content'>
                                <img className='card_image' src={image} alt={saint}/>
                            <section className='card_text'>
                                <h3 className='card_h3'>{saint}</h3>
                                <p className='card_parrafo'><span className='card_icon'> <GiElfHelmet /></span> {caballero}</p>
                                <p className='card_parrafo'><span className='card_icon'> <FaShield /></span>  {rango}</p>
                                <p><Link to={`/saint/${ id }`}>
                                Más...
                                </Link></p>
                                
                            </section>
                        </div> 
                    </div>   
                </main>
            </div>
        </>
    )
}

SaintCard.propTypes = {
    id: PropTypes.string.isRequired,
    saint: PropTypes.string.isRequired,
    caballero: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    rango: PropTypes.string.isRequired,
};
