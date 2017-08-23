FROM microsoft/dotnet:latest
COPY . /app
WORKDIR /app
RUN dotnet restore
RUN dotnet publish -c release
EXPOSE 5000
ENTRYPOINT ["dotnet", "run"]