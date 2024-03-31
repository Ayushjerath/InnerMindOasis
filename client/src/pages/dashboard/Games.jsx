/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../../components/css/games.scss"
import { useUserAuth } from "../../contexts/UserAuthContext";
import DashboardLayout from '../../components/DashboardLayout';
import game1 from "../../assets/games/1.jpg";
import game2 from "../../assets/games/2.jpg";
import game3 from "../../assets/games/3.png";
import game4 from "../../assets/games/4.png";
import game5 from "../../assets/games/5.png";
import game6 from "../../assets/games/6.jpg";
import game7 from "../../assets/games/7.png";
import game8 from "../../assets/games/8.png";
import game9 from "../../assets/games/9.jpg";

const Games = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useUserAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let userId = "";
      try {
        const authResponse = await axios.get("auth/get-user-by-email", {
          params: {
            email: user.email,
          },
        });
        userId = authResponse.data[0]._id;
      } catch (error) {
        console.log("Error fetching user by email", error);
      }
    };

    fetchData();
  }, [user.email]);

  useEffect(() => {
    navActivePage();
  }, []);

  function navActivePage() {
    // Function to handle navigation active page
    // You can implement this logic here
  }

  return (
    <>
      <DashboardLayout>
        <header> <h2>Games</h2> </header>
        <div>
          <p> Here we have brought you a variety of single-player and multiplayer fun games to play anytime, anywhere and, with anyone. It could be your friends or random people from around the world. It helps to relac and rejuvenate.</p>
        </div>

        {/* Row 1 */}
        <div classname="row">
          {/* Game 1 */}
          <div className="col-sm-4">
            <a href="" title="">
              <img src={game1} alt="Game 1" className="img-responsive" />
            </a>
            <div className="card-container card-container-lg">
              <h3>1. Agar</h3>
              <a href="https://agar.io/" title="Agar" class="btn btn-default" target="_blank" rel="noreferrer">Play</a>
            </div>
          </div>

          {/* Game 2 */}
          <div class="col-sm-4">
            <a href="" title="">
              <img src={game2} alt="Game 2" class="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h3>2. Flappy</h3>
              <a href="https://flappyroyale.io/" title="Flappy" class="btn btn-default" target="_blank" rel="noreferrer">Play</a>
            </div>
          </div>

          {/* Game 3 */}
          <div class="col-sm-4">
            <a href="" title="">
              <img src={game3} alt="Game 3" class="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h3>3. Slither</h3>
              <a href="http://slither.io/" title="Slither" class="btn btn-default">Play</a>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div classname="row">
          {/* Game 4 */}
          <div className="col-sm-4">
            <a href="" title="">
              <img src={game4} alt="Game 4" className="img-responsive" />
            </a>
            <div className="card-container card-container-lg">
              <h3>4. Diep</h3>
              <a href="https://diep.io/" title="Diep" class="btn btn-default" target='_blank' rel="noreferrer">Play</a>
            </div>
          </div>

          {/* Game 5 */}
          <div class="col-sm-4">
            <a href="" title="">
              <img src={game5} alt="Game 5" class="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h3>5. Tetr</h3>
              <a href="https://tetr.io/" title="Tetr" class="btn btn-default" target='_blank' rel="noreferrer">Play</a>
            </div>
          </div>

          {/* Game 6 */}
          {/* <div class="col-sm-4">
            <a href="" title="">
              <img src={game6} alt="Game 6" class="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h3>6. Skribbl</h3>
              <a href="https://skribbl.io/" title="Skribbl" class="btn btn-default">Play</a>
            </div>
          </div> */}
          <div className="col-sm-4">
            <a href="" title="">
              <img src={game6} alt="Game 6" className="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h3>6. 2048</h3>
              <a href="http://2048.io/" title="2048" class="btn btn-default" target='_blank' rel="noreferrer">Play</a>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div classname="row">
          {/* Game 7 */}
          <div class="col-sm-4">
            <a href="" title="">
              <img src={game7} alt="Game 7" class="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h3>7. Skribbl</h3>
              <a href="https://skribbl.io/" title="Skribbl" class="btn btn-default">Play</a>
            </div>
          </div>

          {/* Game 8 */}
          <div class="col-sm-4">
            <a href="" title="">
              <img src={game8} alt="Game 8" class="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h3>8. Krunker</h3>
              <a href="https://krunker.io/" title="Krunker" class="btn btn-default">Play</a>
            </div>
          </div>

          {/* Game 9 */}
          <div class="col-sm-4">
            <a href="" title="">
              <img src={game9} alt="Game 9" class="img-responsive" />
            </a>
            <div class="card-container card-container-lg">
              <h4>9. Smash Karts</h4>
              <a href="https://smashkarts.io/" title="Smash Karts" class="btn btn-default">Play</a>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}

export default Games;
