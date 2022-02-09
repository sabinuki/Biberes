require 'rails_helper'

RSpec.describe BreweryImporter, type: :model do
  describe '#execute' do
    subject { importer.execute }

    let(:importer) { BeerImporter.new }

    context 'when seed CSV file has empty rows' do
      before do
        allow(CSV).to receive(:read).and_return(CSV::Table.new([]))
      end

      it { expect { subject }.not_to change(Beer, :count) }
    end

    context 'when seed CSV file has rows' do
      before do
        allow(CSV).to receive(:read).and_return(csv)
      end

      let(:brewery) { create(:brewery) }
      let(:csv) { Array.new(2) { { 'name' => Faker::Beer.name, 'brewery' => brewery.name } } }

      context 'data is valid' do
        it { expect { subject }.to change(Beer, :count).from(0).to(csv.size) }
      end

      context 'import by #execute more than twice' do
        it 'insert data only once' do
          expect { importer.execute }.to change(Beer, :count).from(0).to(csv.size)
          expect { importer.execute }.not_to change(Beer, :count)
        end
      end

      context 'data brewery is blank' do
        let(:csv) { Array.new(2) { { 'name' => Faker::Beer.name, 'brewery' => '' } } }

        it { expect{ subject }.not_to change(Beer, :count) }
      end

      context 'data is already saved' do
        let(:beer) { create(:beer) }
        let(:csv) { Array.new(1, { 'name' => beer.name, 'brewery' => beer.brewery_name }) }

        it { expect{ subject }.not_to change(Beer, :count) }
      end

      context 'data is duplicated only name with saved beer' do
        let(:beer) { create(:beer) }
        let(:csv) { Array.new(1, { 'name' => beer.name, 'brewery' => brewery.name }) }

        it { expect { subject }.to change(Beer, :count).by(csv.size) }
      end

      context 'data is duplicated only brewery name with saved beer' do
        let(:beer) { create(:beer) }
        let(:csv) { Array.new(1, { 'name' => Faker::Beer.name, 'brewery' => beer.brewery_name }) }

        it { expect { subject }.to change(Beer, :count).by(csv.size) }
      end
    end
  end
end
