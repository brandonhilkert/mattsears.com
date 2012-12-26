#!/usr/bin/env ruby
require "rubygems"
require "bundler/setup"
require "rack/jekyll"
require 'rack/contrib'
require 'rack-rewrite'
require 'rack-static-if-present'

use Rack::StaticCache, :urls => [
  '/images', '/javascripts', '/stylesheets', '/favicon.gif',
  '/robots.txt','/sitemap.xml'], :root => "_site"

use Rack::Rewrite do
  # Permanently move posts to the articles directory
  r301 %r{^/(\d{4})\/(\d+)\/(\d+)\/(.*)}, '/articles/$1/$2/$3/$4'
  rewrite '/feed', '/feed.xml'
  rewrite '/articles', '/articles.html'
  #rewrite %r{^/(?!email)(.*)\?(.*)}, '/_site/$1.html?$2'
  rewrite %r{^/tags/(?!email)(.*)}, '/tags/$1.html'
end
# use Rack::StaticIfPresent, :urls => ["/"], :root => "_site"
run Rack::Jekyll.new

