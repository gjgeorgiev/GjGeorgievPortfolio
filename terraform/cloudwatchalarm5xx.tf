resource "aws_cloudwatch_metric_alarm" "cloudfront_5xx" {
  alarm_name          = "cloudfront-5xx-errors"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = 2
  metric_name         = "5xxErrorRate"
  namespace           = "AWS/CloudFront"
  period              = 300
  statistic           = "Average"
  threshold           = 1

  dimensions = {
    DistributionId = aws_cloudfront_distribution.cdn.id
    Region         = "Global"
  }
}