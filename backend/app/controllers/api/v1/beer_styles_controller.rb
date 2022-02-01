class Api::V1::BeerStylesController < ApplicationController
  def index
    styles = BeerStyle.all
    render json: { status: 'SUCCESS', data: styles.map(&:name) }, status: :ok
  end

  def show
    style = BeerStyle.find(beer_style_params[:id])
    render json: { status: 'SUCCESS', data: style }, status: :ok
  end

  private

  def beer_style_params
    params.permit(:id)
  end
end
