DC Comics Collection

A JavaScript and Rails app that creates users and DC comics with a title, hero, heroine and villain. Comics can be removed from a user's card.

Prerequisites:

The setups steps expect following tools installed on the system.

Github Ruby 2.6.1 Rails 6.0.1

Check your Ruby version ruby -v The ouput should start with something like ruby 2.6.1

If not, install the right ruby version using rbenv:

rbenv install 2.6.1

Check your Rails version rails -v The ouput should start with something like Rails 6.0.1

Check your Yarn version yarn -v The ouput should start with something like 1.19.2

If not, install right yarn version pwd /home/david curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

cd DC-Comics

Install webpacker rails webpacker:install

Installation:

Check out the repository git clone https://github.com/ZumbaIdol/DC-Comics

Change dir to DC-Comics:

cd DC-Comics

Install the gems required by the applications bundle install.

Start the Rails server for the backend. You can start the rails server using the command given below:

rails s 

Visit the site with the URL http://localhost:3000/users or http://localhost:3000/dc_comics.

You also need to open the index.html file for the frontend in order to view the webpage.  On Mac, you can type the command open index.html in the text editor's console.  On Windows, this doesn't work; instead, right click on the index.html file and select copy path.  Copy the path and then paste it in another tab in your browser to view the webpage.  From there, you can create users and add/remove comics from that user's card.

Contributing:

Bug reports and pull requests are welcome on GitHub at https://github.com/ZumbaIdol/. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

License

The gem is available as open source under the terms of the MIT License.
