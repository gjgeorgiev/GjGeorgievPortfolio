output "bucket_name" {
  value = aws_s3_bucket.site.bucket
}

output "cloudfront_id" {
  value = aws_cloudfront_distribution.cdn.id
}
/* 
output "github_role_arn" {
  value = aws_iam_role.github_actions.arn
} */