require 'jd_model'

describe JDModel do
  describe '.all' do
    it 'returns all jd_elements' do
      jd_elements = JDModel.all

      expect(jd_elements).to include("Body weight management tool. Vegetarian and Vegan-friendly.")

    end
  end
end