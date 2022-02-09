class BeerImporter
  require 'csv'

  def self.execute
    new.execute
  end

  def execute
    import_beer
  end

  private

  def import_beer
    saved_beers = Beer.pluck(:name, :brewery_id)
    file_path = Rails.root.join('db/seeds/beer/beer.csv')
    csv = CSV.read(file_path, headers: true)

    breweries = Brewery.pluck(:id, :name).to_h

    beers = csv.map do |row|
      brewery_id = breweries.key(row['brewery'])

      next if saved_beers.include?([row['name'], brewery_id])

      {
        name: row['name'],
        brewery_id: brewery_id
      }
    end

    beers.compact!

    Beer.import(beers)
  end
end
