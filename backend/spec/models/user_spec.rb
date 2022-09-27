require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { user }

    describe :email do
      let(:user) { build(:user, email: email) }

      context 'when has correct email' do
        let(:email) { Faker::Internet.email }

        it { is_expected.to be_valid }
      end

      context 'when email is empty string' do
        let(:email) { '' }

        it { is_expected.to be_invalid }
      end

      context 'when email is nil' do
        let(:email) { nil }

        it { is_expected.to be_invalid }
      end

      context 'when email has upper charactors' do
        let(:email) { Faker::Internet.email.upcase }

        it 'should build instance has lower case email' do
          expect(subject).to be_valid
          expect(subject.email).to eq email.downcase
        end
      end

      context 'when email is empty string' do
        let(:email) { Faker::Lorem.word }

        it { is_expected.to be_invalid }
      end
    end

    describe :name do
      let(:user) { build(:user, name: name) }

      context 'when name is empty string' do
        let(:name) { '' }

        it { is_expected.to be_invalid }
      end

      context 'when name is nil' do
        let(:name) { nil }

        it { is_expected.to be_invalid }
      end
    end

    describe :password do
      let(:user) { build(:user, password: password, password_confirmation: confirmation) }

      context 'when password match confirmation' do
        let(:password)     { Faker::Internet.password }
        let(:confirmation) { password }

        it { is_expected.to be_valid }
      end

      context 'when password unmatch confirmation' do
        let(:password)     { Faker::Internet.password }
        let(:confirmation) { Faker::Internet.password }

        it { is_expected.to be_invalid }
      end

      context 'when password is empty string' do
        let(:password)     { '' }
        let(:confirmation) { Faker::Internet.password }

        it { is_expected.to be_invalid }
      end

      context 'when password is nil' do
        let(:password)     { nil }
        let(:confirmation) { Faker::Internet.password }

        it { is_expected.to be_invalid }
      end

      context 'when password and confirmation are empty string' do
        let(:password)     { '' }
        let(:confirmation) { '' }

        it { is_expected.to be_invalid }
      end

      context 'when password is nil' do
        let(:password)     { nil }
        let(:confirmation) { nil }

        it { is_expected.to be_invalid }
      end
    end

    describe :user_id do
      let(:user) { build(:user, user_id: user_id) }

      context 'when user_id is empty string' do
        let(:user_id) { '' }

        it { is_expected.to be_invalid }
      end

      context 'when user_id is empty string' do
        let(:user_id) { nil }

        it { is_expected.to be_invalid }
      end

      context 'when duplicate user_id' do
        let!(:registered) { create(:user) }
        let(:user)        { build(:user, user_id: registered.user_id) }

        it { is_expected.to be_invalid }
      end
    end

    describe :roll do
      context 'when roll is blank' do
        let(:user) { build(:user, roll: '') }

        it { is_expected.to be_invalid }
      end

      context 'when roll is general' do
        let(:user) { build(:user, :general_user) }

        it { is_expected.to be_valid }
      end

      context 'when roll is brewery' do
        let(:user) { build(:user, :brewery_user) }

        it { is_expected.to be_valid }
      end

      context 'when roll is admin' do
        let(:user) { build(:user, :admin_user) }

        it { is_expected.to be_valid }
      end
    end
  end
end
