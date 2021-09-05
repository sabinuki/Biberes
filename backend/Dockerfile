FROM ruby:3.0.0
RUN apt-get update -qq && apt-get install -y nodejs yarn
RUN mkdir /biberes
WORKDIR /biberes
COPY Gemfile /biberes/Gemfile
COPY Gemfile.lock /biberes/Gemfile.lock
RUN bundle install
COPY . /biberes

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
