const DATA = {
  portfolio: {
    or_suisse_g: 201.51,
    or_belgique_g: 0,
    argent_g: 311.00,

    or_suisse_cost: 9125,
    or_belgique_cost: 0,
    argent_cost: 573.20
  },

  etf: {
    argent: { parts: 5, buy: 248.36 },
    monde: { parts: 3, buy: 484.32 },
    seniors: { parts: 11, buy: 816.74 },
    juniors: { parts: 0, buy: 0 },
    petrole: { parts: 3, buy: 142.03},
    or: {parts: 0, buy: 0.0},
    argent: {parts: 5, buy: 248.36}
  }
};

// ⚠️ IMPORTANT
// Les parts ETF sont gérées ici (source de vérité)
// Le Google Sheet doit être mis à jour pour rester cohérent avec l’historique
