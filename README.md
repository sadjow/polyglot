# polyglot

Algorithms in A, B and C just for fun! _へ__(‾◡◝ )>

Method names are named based on type of solution: iterate (for loops), recursive, pattern_match, std (standard api)

## Running tests

### Golang

`go test ./... -v`

### Ruby

`bundle exec rake test TESTOPTS='-v'`

### Elixir

`mix test`

### Deno & TypeScript

`deno test **/*_test.ts`

### Rust

`cargo test`

#### All tests

`bundle exec rake -m polyglot -v`.

## Talk to Polyglot

Try this:

```sh
iex -S mix
iex(1)> Polyglot.hello_favorite_language()
```

## Keep versions up to date (macOS)

```sh
brew update && brew upgrade elixir erlang deno go ruby-build
```

```sh
rustup update
```
