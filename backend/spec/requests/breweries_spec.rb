require 'rails_helper'

RSpec.describe 'Api::V1::BeerStyles', type: :request do
  describe 'GET /index' do
    subject { get api_v1_breweries_path }

    context 'when exist breweries' do
      let!(:breweries) { create_list(:brewery, 2) }

      it 'returns brewery instance list' do
        subject

        expect(response).to have_http_status(:success)
        expect(response.parsed_body['data'].map { |data| data['name'] }).to include *breweries.map(&:name)
      end
    end
  end
end
