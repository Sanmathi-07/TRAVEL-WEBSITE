import "./TripStyles.css";
import TripData  from "./TripData";
import Trip1 from "../assets/104.jpg"
import Trip2 from "../assets/105.jpg"
import Trip3 from "../assets/106.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia is home to some of nature's most beautiful natures, including beaches and deep seas, as well as tropical forests and mountains. Be wowed by gorgeous beaches such as those in Bali, Lombok, Nusa Dua, and the tranquil Gili Islands."
                />

                <TripData 
                image={Trip2}
                heading="Trip in Malaysia"
                text="Malaysia is a wonderful vacation destination for tourists from all across the world. There are several exotic islands, pristine beaches, picturesque towns and adventure spots. If you are planning to visit Malaysia, then you should be aware of what Malaysia is famous for so that you can make an informed bucket list."
                />

                <TripData 
                image={Trip3}
                heading="Trip in France"
                text="France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in different aspects of culture, including cuisine, philosophy, music, art, film, fashion, literature and sport."
                />
            </div>
        </div>
    );
}

export default Trip;