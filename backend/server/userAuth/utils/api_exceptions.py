import logging

# Create a logger
logger = logging.getLogger(__name__)


def handle_exceptions(func):
    """Decorator to handle exceptions in DRF views."""
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception as e:
            logger.error(f"Error in {func.__name__}: {str(e)}", exc_info=True)
            return Response(
                {
                    "success": False,
                    "error": "An internal server error occurred. Please try again later.",
                    "details": str(e)  # Consider removing this in production for security
                },
                status=500
            )
    return wrapper