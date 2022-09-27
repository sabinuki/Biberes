class Api::V1::BreweriesController < ApplicationController
  def index
    breweries = Brewery.all
    render json: { status: 'SUCCESS', breweries: breweries }, status: :ok
  end

  def show
    brewery = Brewery.find(params[:id])
    render json: { status: 'SUCCESS', brewery: brewery, beers: brewery.beers }, status: :ok
  end

  def create
    brewery = Brewery.new(brewery_params)

    if brewery.save
      render json: { status: 'SUCCESS', brewery: brewery }
    else
      render json: { status: 'ERROR', errors: brewery.errors }
    end
  end

  private

  def brewery_params
    params.require(:brewery).permit(
      :id,
      :name
    )
  end
end
