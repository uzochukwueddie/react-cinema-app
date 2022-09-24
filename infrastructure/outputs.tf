output "cinema_app_bucket_name" {
  value = aws_s3_bucket.cinema_app_s3_bucket.id
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.s3_distribution.id
}
