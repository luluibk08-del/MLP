.boutique-page {
    padding: 140px 40px;
    min-height: 100vh;
    background: linear-gradient(to bottom, #120018, #220033);
  }
  
  .titre-boutique {
    text-align: center;
    font-size: 55px;
    color: white;
    margin-bottom: 60px;
  
    text-shadow:
      0 0 10px #ff00ff,
      0 0 20px #ff00ff,
      0 0 40px #ff00ff;
  }
  
  .grille-produits {
    display: grid;
  
    grid-template-columns:
      repeat(auto-fit, minmax(280px, 1fr));
  
    gap: 40px;
  }
  
  .carte-produit {
    background: rgba(255,255,255,0.08);
  
    border: 2px solid rgba(255,255,255,0.2);
  
    border-radius: 25px;
  
    padding: 20px;
  
    text-align: center;
  
    backdrop-filter: blur(12px);
  
    transition: 0.3s;
  
    box-shadow:
      0 0 20px rgba(255,0,255,0.4);
  }
  
  .carte-produit:hover {
    transform: scale(1.04);
  
    box-shadow:
      0 0 35px #ff00ff;
  }
  
  .image-produit {
    width: 100%;
    height: 320px;
  
    object-fit: cover;
  
    border-radius: 20px;
  
    margin-bottom: 20px;
  }
  
  .carte-produit h2 {
    color: white;
  
    font-size: 24px;
  
    margin-bottom: 10px;
  
    text-shadow:
      0 0 10px #ff00ff;
  }
  
  .prix {
    color: #ff66ff;
  
    font-size: 28px;
  
    font-weight: bold;
  
    margin-bottom: 20px;
  }
  
  .btn-panier {
    background: linear-gradient(
      45deg,
      #ff00ff,
      #9900ff
    );
  
    color: white;
  
    border: none;
  
    padding: 14px 30px;
  
    border-radius: 15px;
  
    font-size: 18px;
  
    cursor: pointer;
  
    transition: 0.3s;
  
    box-shadow:
      0 0 15px #ff00ff;
  }
  
  .btn-panier:hover {
    transform: scale(1.08);
  
    box-shadow:
      0 0 25px #ff00ff;
  }