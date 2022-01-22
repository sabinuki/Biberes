require 'rails_helper'

RSpec.describe 'Api::V1::BeerStyles', type: :request do
  describe 'GET /index' do
    subject { get api_v1_beer_styles_path }

    context 'when exist styles' do
      let!(:styles) { create_list(:beer_style, 2) }

      it 'returns style names' do
        subject

        expect(response).to have_http_status(:success)
        expect(response.parsed_body['data']).to all(satisfy { |data| styles.map(&:name).include?(data) })
      end
    end
  end
end
