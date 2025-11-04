import recommendationService from './recommendation.service';
import mockProducts from '../mocks/mockProducts';

describe('recommendationService', () => {
  test('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ]);
  });

  test('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station Marketing');
  });

  test('Retorna o último match em caso de empate para SingleProduct', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing', 'Integração com chatbots'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna array vazio quando não há produtos', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing'],
      selectedFeatures: ['Rastreamento de comportamento do usuário'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      []
    );

    expect(recommendations).toHaveLength(0);
  });

  test('Retorna array vazio quando produtos é null ou undefined', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing'],
      selectedFeatures: ['Rastreamento de comportamento do usuário'],
      selectedRecommendationType: 'SingleProduct',
    };

    expect(recommendationService.getRecommendations(formData, null)).toHaveLength(0);
    expect(recommendationService.getRecommendations(formData, undefined)).toHaveLength(0);
  });

  test('Retorna array vazio quando não há preferências nem features selecionadas', () => {
    const formData = {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(0);
  });

  test('Retorna array vazio quando não há produtos que correspondem às seleções', () => {
    const formData = {
      selectedPreferences: ['Preferência inexistente'],
      selectedFeatures: ['Feature inexistente'],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(0);
  });

  test('Funciona apenas com preferências selecionadas (sem features)', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: [],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Funciona apenas com features selecionadas (sem preferências)', () => {
    const formData = {
      selectedPreferences: [],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna array vazio para tipo de recomendação inválido', () => {
    const formData = {
      selectedPreferences: ['Automação de marketing'],
      selectedFeatures: ['Rastreamento de comportamento do usuário'],
      selectedRecommendationType: 'InvalidType',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(0);
  });

  test('Retorna produtos ordenados por score decrescente para MultipleProducts', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    // RD Station CRM tem score 4 (2 preferences + 2 features)
    // RD Station Marketing tem score 2 (1 preference + 1 feature)
    expect(recommendations).toHaveLength(2);
    expect(recommendations[0].name).toBe('RD Station CRM');
    expect(recommendations[1].name).toBe('RD Station Marketing');
  });

  test('Retorna array vazio quando formData é undefined', () => {
    const recommendations = recommendationService.getRecommendations(
      undefined,
      mockProducts
    );

    expect(recommendations).toHaveLength(0);
  });

  test('Retorna array vazio quando formData é null', () => {
    const recommendations = recommendationService.getRecommendations(
      null,
      mockProducts
    );

    expect(recommendations).toHaveLength(0);
  });
});
