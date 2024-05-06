// next.config.js
const nextConfig = {
  webpack(config) {
    // Add a new rule for handling PDF files
    config.module.rules.push({
      test: /\.pdf$/, // Target PDF files
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]', // Keep original path, name, and extension
          },
        },
      ],
    });

    return config; // Return the updated config
  },
};

module.exports = nextConfig; // Export the Next.js configuration
