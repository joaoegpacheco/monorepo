// getRecommendations.js

/**
 * Calcula o score de correspondência de um produto baseado nas preferências e features selecionadas
 * @param {Object} product - Produto a ser avaliado
 * @param {Array} selectedPreferences - Preferências selecionadas pelo usuário
 * @param {Array} selectedFeatures - Features selecionadas pelo usuário
 * @returns {number} - Score de correspondência
 */
const calculateProductScore = (product, selectedPreferences, selectedFeatures) => {
  let score = 0;

  // Verifica se o produto tem preferências e features válidas
  const productPreferences = product?.preferences || [];
  const productFeatures = product?.features || [];

  // Conta quantas preferências do produto correspondem às selecionadas
  if (Array.isArray(selectedPreferences)) {
    selectedPreferences.forEach((preference) => {
      if (productPreferences.includes(preference)) {
        score += 1;
      }
    });
  }

  // Conta quantas features do produto correspondem às selecionadas
  if (Array.isArray(selectedFeatures)) {
    selectedFeatures.forEach((feature) => {
      if (productFeatures.includes(feature)) {
        score += 1;
      }
    });
  }

  return score;
};

/**
 * Verifica se um produto tem alguma correspondência com as seleções do usuário
 * @param {Object} product - Produto a ser avaliado
 * @param {Array} selectedPreferences - Preferências selecionadas pelo usuário
 * @param {Array} selectedFeatures - Features selecionadas pelo usuário
 * @returns {boolean} - True se o produto tem pelo menos uma correspondência
 */
const hasMatch = (product, selectedPreferences, selectedFeatures) => {
  // Verifica se o produto tem preferências e features válidas
  const productPreferences = product?.preferences || [];
  const productFeatures = product?.features || [];

  // Verifica correspondências de preferências
  const hasPreferenceMatch = Array.isArray(selectedPreferences) &&
    selectedPreferences.length > 0 &&
    selectedPreferences.some((preference) => productPreferences.includes(preference));

  // Verifica correspondências de features
  const hasFeatureMatch = Array.isArray(selectedFeatures) &&
    selectedFeatures.length > 0 &&
    selectedFeatures.some((feature) => productFeatures.includes(feature));

  return hasPreferenceMatch || hasFeatureMatch;
};

/**
 * Retorna os produtos recomendados baseados nas preferências e features selecionadas
 * @param {Object} formData - Dados do formulário com preferências, features e tipo de recomendação
 * @param {Array} products - Lista de produtos disponíveis
 * @returns {Array} - Lista de produtos recomendados
 */
const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products = []
) => {
  if (!products || products.length === 0) {
    return [];
  }

  // Trata formData null ou undefined
  if (!formData) {
    return [];
  }

  const { selectedPreferences = [], selectedFeatures = [], selectedRecommendationType = '' } = formData;

  // Se não há preferências nem features selecionadas, retorna array vazio
  if (selectedPreferences.length === 0 && selectedFeatures.length === 0) {
    return [];
  }

  // Calcula o score para cada produto e filtra apenas os que têm match
  // Mantém o índice original para garantir que em caso de empate, o último produto seja escolhido
  const productsWithScore = products
    .map((product, index) => ({
      product,
      score: calculateProductScore(product, selectedPreferences, selectedFeatures),
      originalIndex: index,
    }))
    .filter((item) => hasMatch(item.product, selectedPreferences, selectedFeatures))
    .sort((a, b) => {
      // Ordena por score decrescente
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      // Em caso de empate, retorna o último produto (maior índice original)
      return b.originalIndex - a.originalIndex;
    });

  // Se não há produtos com match, retorna array vazio
  if (productsWithScore.length === 0) {
    return [];
  }

  // Para SingleProduct, retorna apenas o último produto com maior score
  if (selectedRecommendationType === 'SingleProduct') {
    return [productsWithScore[0].product];
  }

  // Para MultipleProducts, retorna todos os produtos que têm match
  if (selectedRecommendationType === 'MultipleProducts') {
    return productsWithScore.map((item) => item.product);
  }

  // Por padrão, retorna array vazio se o tipo não for reconhecido
  return [];
};

const recommendationService = {
  getRecommendations,
};

export default recommendationService;
