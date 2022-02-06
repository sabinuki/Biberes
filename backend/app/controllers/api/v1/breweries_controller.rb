class Api::V1::BreweriesController < ApplicationController
  def index
    breweries = Brewery.all
    render json: { status: 'SUCCESS', data: breweries }, status: :ok
  end
end
