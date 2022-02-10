class Api::V1::BreweriesController < ApplicationController
  def index
    breweries = Brewery.all
    render json: { status: 'SUCCESS', data: breweries }, status: :ok
  end

  def show
    brewery = Brewery.find(brewery_params[:id])
    render json: { status: 'SUCCESS', brewery: brewery, beers: brewery.beers }, status: :ok
  end

  private

  def brewery_params
    params.permit(:id)
  end
end
