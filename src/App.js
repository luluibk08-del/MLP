import React, { useState } from "react";
import "./styles.css";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Tb4mOF6YUwjNXIWEuXAFNBtmKYs60ROnpl6AuTrMz3z28pWJqT1gnXUgREs2TvovdeTAEg7cPnjoJboNIOPQzgU00ncMQy6c2XXXXXXX"
);

function Boutique({
  ajouterAuPanier,
  recherche,
  setProduitSelectionne,
  setPage,
}) {
  const produits = [
    {
      nom: "Nike Running Gris",
      prix: "35€",
      image: "/nike-running-bas-gris.jpg",
    },

    {
      nom: "Nike Running Noir",
      prix: "35€",
      image: "/nike-running-bas-noir.jpg",
    },
    {
      nom: "Nike Running Veste Gris",
      prix: "45€",
      image: "/nike-running-veste-gris.jpg",
    },
    {
      nom: "Nike Running Veste Noir",
      prix: "45€",
      image: "/nike-running-veste-noir.jpg",
    },

    {
      nom: "Nike Short Bleu",
      prix: "25€",
      image: "/nike-short-bleu-front.jpg",
      image2: "/nike-short-bleu-side.jpg",
    },
    { nom: "Nike Short Gris", prix: "25€", image: "/nike-short-gris.jpg" },
    { nom: "Nike Short Rose", prix: "25€", image: "/nike-short-rose.jpg" },
    { nom: "Nike Short Vert", prix: "25€", image: "/nike-short-vert.jpg" },

    {
      nom: "Nike Tech Bas Noir",
      prix: "40€",
      image: "/nike-tech-bas-noir-front.jpg",
      image2: "/nike-tech-bas-noir-side.jpg",
    },
    {
      nom: "Nike Tech Veste Noir",
      prix: "50€",
      image: "/nike-tech-veste-noir-front.jpg",
      image2: "/nike-tech-veste-noir-side.jpg",
    },

    { nom: "Nike Tee Bleu", prix: "20€", image: "/nike-tee-bleu.jpg" },
    { nom: "Nike Tee Gris", prix: "20€", image: "/nike-tee-gris.jpg" },
    { nom: "Nike Tee Rose", prix: "20€", image: "/nike-tee-rose.jpg" },
    { nom: "Nike Tee Vert", prix: "20€", image: "/nike-tee-vert.jpg" },

    {
      nom: "CP Tee Blanc",
      prix: "25€",
      image: "/cp-tee-blanc-front.jpg",
      image2: "/cp-tee-blanc-side.jpg",
    },

    { nom: "Tee Simple Blanc", prix: "15€", image: "/tee-simple-blanc.jpg" },
    { nom: "Tee Simple Noir", prix: "15€", image: "/tee-simple-noir.jpg" },

    { nom: "TNF Tee Blanc", prix: "25€", image: "/tnf-tee-blanc.jpg" },
    { nom: "TNF Tee Noir", prix: "25€", image: "/tnf-tee-noir.jpg" },

    {
      nom: "Under Running Gris",
      prix: "35€",
      image: "/under-running-bas-gris.jpg",
    },
    {
      nom: "Under Running Noir",
      prix: "35€",
      image: "/under-running-bas-noir.jpg",
    },
    {
      nom: "Under Running Veste Gris",
      prix: "45€",
      image: "/under-running-veste-gris.jpg",
    },
    {
      nom: "Under Running Veste Noir",
      prix: "45€",
      image: "/under-running-veste-noir.jpg",
    },

    {
      nom: "Under Short Bleu",
      prix: "25€",
      image: "/under-short-bleu-front.jpg",
      image2: "/under-short-bleu-side.jpg",
    },
    { nom: "Under Short Noir", prix: "25€", image: "/under-short-noir.jpg" },
    {
      nom: "Under Short Orange",
      prix: "25€",
      image: "/under-short-orange-front.jpg",
      image2: "/under-short-orange-side.jpg",
    },
    { nom: "Under Short Rose", prix: "25€", image: "/under-short-rose.jpeg" },

    { nom: "Under Tee Gris", prix: "20€", image: "/under-tee-gris.jpg" },
    { nom: "Under Tee Noir", prix: "20€", image: "/under-tee-noir.jpg" },
    { nom: "Under Tee Orange", prix: "20€", image: "/under-tee-orange.jpg" },
    { nom: "Under Tee Rose", prix: "20€", image: "/under-tee-rose.jpg" },
  ];
  const produitsFiltres = produits.filter((produit) =>
    produit.nom.toLowerCase().includes(recherche.toLowerCase())
  );
  const [taillesSelectionnees, setTaillesSelectionnees] = useState({});
  return (
    <div className="boutique-page">
      <h1 className="titre-boutique">🔥 BOUTIQUE MLP 🔥</h1>

      <div className="grille-produits">
        {produitsFiltres.map((produit, index) => (
          <div className="carte-produit" key={index}>
            <img
              src={produit.image}
              alt={produit.nom}
              className="image-produit"
              onClick={() => {
                setProduitSelectionne(produit);
                setPage("produit");
              }}
              onMouseOver={(e) => {
                if (produit.image2) {
                  e.target.src = produit.image2;
                }
              }}
              onMouseOut={(e) => {
                e.target.src = produit.image;
              }}
            />

            <h2>{produit.nom}</h2>

            <p className="prix">{produit.prix}</p>

            <div className="options-produit">
              <p className="taille-label">Choisissez votre taille :</p>

              <div className="tailles">
                <button
                  className={`taille-btn ${
                    taillesSelectionnees[index] === "S" ? "taille-active" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTaillesSelectionnees({
                      ...taillesSelectionnees,
                      [index]: "S",
                    });
                  }}
                >
                  S
                </button>

                <button
                  className={`taille-btn ${
                    taillesSelectionnees[index] === "M" ? "taille-active" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTaillesSelectionnees({
                      ...taillesSelectionnees,
                      [index]: "M",
                    });
                  }}
                >
                  M
                </button>

                <button
                  className={`taille-btn ${
                    taillesSelectionnees[index] === "L" ? "taille-active" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setTaillesSelectionnees({
                      ...taillesSelectionnees,
                      [index]: "L",
                    });
                  }}
                >
                  L
                </button>
              </div>

              <input
                className="quantite-input"
                type="number"
                min="1"
                defaultValue="1"
                onChange={(e) => (produit.quantite = e.target.value)}
              />
            </div>

            <button
              className="btn-panier"
              onClick={() => {
                ajouterAuPanier({
                  ...produit,
                  taille: taillesSelectionnees[index] || "M",
                  quantite: produit.quantite || 1,
                });

                alert(`✅ ${produit.nom} ajouté au panier !`);
              }}
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("accueil");
  const [panier, setPanier] = useState([]);
  const [pagePrecedente, setPagePrecedente] = useState("accueil");
  const [recherche, setRecherche] = useState("");
  const [produitSelectionne, setProduitSelectionne] = useState(null);
  const [tailleChoisie, setTailleChoisie] = useState("M");
  const [quantiteChoisie, setQuantiteChoisie] = useState(1);
  const ajouterAuPanier = (produit) => {
    setPanier((ancienPanier) => [...ancienPanier, produit]);
  };
  const [articlesSelectionnes, setArticlesSelectionnes] = useState([]);
  const supprimerDuPanier = (indexASupprimer) => {
    setPanier(panier.filter((_, index) => index !== indexASupprimer));
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button
          className="back-btn"
          onClick={() => {
            const temp = page;
            setPage(pagePrecedente);
            setPagePrecedente(temp);
          }}
        >
          ←
        </button>

        <h1 className="mini-logo">MLP</h1>

        <div className="nav-links">
          <button
            onClick={() => {
              setPagePrecedente(page);
              setPage("accueil");
            }}
          >
            Accueil
          </button>

          <button
            onClick={() => {
              setPagePrecedente(page);
              setPage("boutique");
            }}
          >
            Boutique
          </button>
          <button
            onClick={() => {
              setPagePrecedente(page);
              setPage("accessoires");
            }}
          >
            Accessoires
          </button>

          <button
            onClick={() => {
              setPagePrecedente(page);
              setPage("apropos");
            }}
          >
            À propos
          </button>
        </div>

        <div className="nav-right">
          <input
            type="text"
            placeholder="Rechercher..."
            className="search-bar"
            value={recherche}
            onChange={(e) => {
              setRecherche(e.target.value);
              setPage("boutique");
            }}
          />

          <button className="cart-btn" onClick={() => setPage("panier")}>
            🛒 {panier.length}
          </button>
        </div>
      </nav>

      {page === "accueil" && (
        <div className="hero">
          <button className="btn" onClick={() => setPage("boutique")}>
            DÉCOUVRIR NOS ARTICLES
          </button>
        </div>
      )}

      {page === "boutique" && (
        <Boutique
          ajouterAuPanier={ajouterAuPanier}
          recherche={recherche}
          setProduitSelectionne={setProduitSelectionne}
          setPage={setPage}
        />
      )}

      {page === "produit" && produitSelectionne && (
        <div className="about-section">
          <button className="btn-panier" onClick={() => setPage("boutique")}>
            ← Retour
          </button>

          <h1>{produitSelectionne.nom}</h1>

          <img
            src={produitSelectionne.image}
            alt={produitSelectionne.nom}
            style={{
              width: "450px",
              maxWidth: "100%",
              borderRadius: "20px",
            }}
          />

          <h2>{produitSelectionne.prix}</h2>

          <p>
            Produit disponible chez MLP. Livraison rapide et qualité garantie.
          </p>
          <h3>Choisissez votre taille :</h3>

          <div className="tailles">
            <button
              className={`taille-btn ${
                tailleChoisie === "S" ? "taille-active" : ""
              }`}
              onClick={() => setTailleChoisie("S")}
            >
              S
            </button>

            <button
              className={`taille-btn ${
                tailleChoisie === "M" ? "taille-active" : ""
              }`}
              onClick={() => setTailleChoisie("M")}
            >
              M
            </button>

            <button
              className={`taille-btn ${
                tailleChoisie === "L" ? "taille-active" : ""
              }`}
              onClick={() => setTailleChoisie("L")}
            >
              L
            </button>
          </div>

          <h3>Quantité :</h3>

          <input
            type="number"
            min="1"
            value={quantiteChoisie}
            onChange={(e) => setQuantiteChoisie(e.target.value)}
            className="quantite-input"
          />
          <button
            className="btn-panier"
            onClick={() => {
              ajouterAuPanier({
                ...produitSelectionne,
                taille: tailleChoisie,
                quantite: quantiteChoisie,
              });

              alert("✅ Produit ajouté au panier !");

              setPage("boutique");
            }}
          >
            Ajouter au panier
          </button>
        </div>
      )}
      {page === "panier" && (
        <div className="about-section">
          <h1>🛒 MON PANIER</h1>

          <h2>Vous avez {panier.length} article(s) dans votre panier</h2>

          {panier.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <>
              <button
                className="btn-panier"
                onClick={() => {
                  setArticlesSelectionnes(panier.map((_, index) => index));
                }}
              >
                ✅ Tout sélectionner
              </button>
              {panier.map((article, index) => (
                <div className="about-card" key={index}>
                  <input
                    type="checkbox"
                    checked={articlesSelectionnes.includes(index)}
                    onChange={() => {
                      if (articlesSelectionnes.includes(index)) {
                        setArticlesSelectionnes(
                          articlesSelectionnes.filter((i) => i !== index)
                        );
                      } else {
                        setArticlesSelectionnes([
                          ...articlesSelectionnes,
                          index,
                        ]);
                      }
                    }}
                  />

                  <img
                    src={article.image}
                    alt={article.nom}
                    className="image-produit"
                    onClick={() => {
                      setProduitSelectionne(article);
                      setPage("produit");
                    }}
                    onMouseOver={(e) => {
                      if (article.image2) {
                        e.target.src = article.image2;
                      }
                    }}
                    onMouseOut={(e) => {
                      e.target.src = article.image;
                    }}
                  />

                  <h3>{article.nom}</h3>

                  <p>Prix : {article.prix}</p>

                  <p>Taille : {article.taille}</p>

                  <p>Quantité : {article.quantite}</p>

                  <button
                    className="btn-supprimer"
                    onClick={() => supprimerDuPanier(index)}
                  >
                    🗑️ Retirer
                  </button>
                </div>
              ))}

              <h2>
                Sous-total :
                {panier.reduce(
                  (total, article) =>
                    total +
                    parseInt(article.prix.replace("€", "")) *
                      parseInt(article.quantite),
                  0
                )}
                €
              </h2>

              <h3>Livraison : 3,99€</h3>
              <h2>
                Total :
                {(
                  panier.reduce(
                    (total, article) =>
                      total +
                      parseInt(article.prix.replace("€", "")) *
                        parseInt(article.quantite),
                    0
                  ) + 3.99
                ).toFixed(2)}
                €
              </h2>

              <button
                className="btn-panier"
                onClick={() => setPage("commande")}
              >
                📦 Commander la sélection
              </button>
            </>
          )}

          <button className="btn-panier" onClick={() => setPage("boutique")}>
            Continuer mes achats
          </button>
        </div>
      )}
      {page === "commande" && (
        <div className="about-section">
          <h1>📦 COMMANDE</h1>

          <h2>
            Total :{" "}
            {panier.reduce(
              (total, article) =>
                total +
                parseInt(article.prix.replace("€", "")) *
                  parseInt(article.quantite),
              0
            )}
            €
          </h2>

          <input type="text" placeholder="Nom" className="input-commande" />

          <input type="text" placeholder="Prénom" className="input-commande" />

          <input
            type="email"
            placeholder="Adresse e-mail"
            className="input-commande"
          />

          <input
            type="text"
            placeholder="Adresse de livraison"
            className="input-commande"
          />

          <button
            className="btn-panier"
            onClick={() =>
              window.open("https://paypal.me/FranckGokou491", "_blank")
            }
          >
            💳 Payer avec PayPal
          </button>

          <button
            className="btn-panier"
            onClick={() =>
              window.open("https://paypal.me/FranckGokou491", "_blank")
            }
          >
            💳 Payer avec PayPal
          </button>
          <button
            className="btn-panier"
            onClick={() => setPage("confirmation")}
          >
            💳 Payer par carte bancaire
          </button>

          <button className="btn-panier" onClick={() => setPage("panier")}>
            ← Retour au panier
          </button>
        </div>
      )}
      {page === "merci" && (
        <div className="about-section">
          <h1>✅ Commande confirmée</h1>

          <p>Merci pour votre commande chez MLP.</p>

          <p>Votre commande a bien été enregistrée.</p>

          <p>Nous vous contacterons bientôt pour le suivi de la livraison.</p>

          <button className="btn-panier" onClick={() => setPage("accueil")}>
            🏠 Retour à l'accueil
          </button>
        </div>
      )}
      {page === "confirmation" && (
        <div className="about-section">
          <h1>💳 Paiement carte bancaire</h1>

          <input type="text" placeholder="Nom" className="input-commande" />

          <input type="email" placeholder="Email" className="input-commande" />

          <input type="text" placeholder="Adresse" className="input-commande" />

          <h3>💳 Informations de paiement</h3>

          <input
            type="text"
            placeholder="Nom sur la carte"
            className="input-commande"
          />

          <input
            type="text"
            placeholder="Numéro de carte"
            className="input-commande"
          />

          <input type="text" placeholder="MM/AA" className="input-commande" />

          <input type="text" placeholder="CVC" className="input-commande" />

          <button
            className="btn-panier"
            onClick={() => {
              alert("Paiement envoyé !");
              setPage("merci");
            }}
          >
            💳 Payer
          </button>
        </div>
      )}
      {page === "apropos" && (
        <div className="about-section">
          <h1>🔥 À PROPOS DE MLP 🔥</h1>

          <p>
            MLP est une boutique streetwear moderne spécialisée dans les
            vêtements tendance, sneakers et accessoires.
          </p>

          <p>
            Notre objectif est de proposer des articles stylés, modernes et
            accessibles à tous les passionnés de mode urbaine.
          </p>

          <div className="about-cards">
            <div className="about-card">🔥 Produits tendance</div>
            <div className="about-card">⚡ Livraison rapide</div>
            <div className="about-card">💎 Qualité garantie</div>
            <div className="about-card">📞 Service client disponible</div>
          </div>

          <h2>📍 OÙ SOMMES-NOUS ?</h2>
          <p>Basé en France 🇫🇷</p>
          <p>Boutique disponible uniquement en ligne.</p>

          <h2>📱 NOS RÉSEAUX</h2>
          <div className="socials">
            <p>Instagram : @mlp.store</p>
            <p>TikTok : @mlp.store</p>
            <p>Snapchat : @mlp.store</p>
          </div>
        </div>
      )}
    </div>
  );
}
